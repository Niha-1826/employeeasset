package com.employee.assettestcases;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.employee.entity.Asset;
import com.employee.entity.Employee;
import com.employee.repository.AssetRepository;
import com.employee.serviceimplementation.AssetServiceImplementation;


@SpringBootTest
public class AssetTestCases {
	
	@Mock
	private AssetRepository assetRepository;
	
	@InjectMocks
	private AssetServiceImplementation assetService;
	
	@Test
	void addAsset () {
		
		Asset asset = new Asset(1,"Laptop",765253627L,"allocated",new Employee());
		
		when(assetRepository.save(asset)).thenReturn(asset);
		Asset assetDetails = assetService.addAsset(asset);
		assertThat(assetDetails.getItemName().equals(asset.getItemName()));
	}
	
	@Test
	void deleteAsset () {
		Asset asset = new Asset(1,"Laptop",765253627L,"allocated",new Employee());
		assetService.deleteAsset(asset.getItemNumber());
		verify(assetRepository,times(1)).deleteById(1);
	}
	
	@Test
	void viewAllAssets () {
		
		List<Asset> assetList = new ArrayList();
		
		Asset asset = new Asset(1,"Laptop",765253627L,"allocated",new Employee());
		Asset asset1 = new Asset(1,"Laptop",765253627L,"allocated",new Employee());
		
		assetList.add(asset1);
		assetList.add(asset);
		
		when(assetRepository.findAll()).thenReturn(assetList);
		List <Asset> assets = assetService.viewAllAssets();
		assertThat(assets).isEqualTo(assetList);
	}
	
	@Test
	void updateAsset () {
		
		Asset asset = new Asset(1,"Laptop",765253627L,"allocated",new Employee());
		
		when(assetRepository.findById(asset.getItemNumber())).thenReturn(Optional.of(asset));
		
		Asset assets = assetService.updateAsset(1,asset);
		verify(assetRepository,times(1)).findById(asset.getItemNumber());
	}

	
}
