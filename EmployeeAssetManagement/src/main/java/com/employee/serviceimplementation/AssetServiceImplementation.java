package com.employee.serviceimplementation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Asset;
import com.employee.entity.Employee;
import com.employee.exception.AssetNotFoundException;
import com.employee.repository.AssetRepository;
import com.employee.repository.EmployeeRepository;
import com.employee.service.AssetService;

@Service
public class AssetServiceImplementation implements AssetService {
	
	@Autowired
	private AssetRepository assetRepository;
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Asset addAsset(Asset asset) {
		
		assetRepository.save(asset);
		
		return asset;
	}

	@Override
	public void deleteAsset(int id) {
		
		Optional<Asset> asset = assetRepository.findById(id);
		
			
		assetRepository.deleteById(id);
		
		
	}

	@Override
	public Asset updateAsset(int id,Asset asset) {
		Optional<Asset> assetDetails = assetRepository.findById(asset.getItemNumber());
		
		if(assetDetails.isEmpty()) {
			throw new AssetNotFoundException();
		}else {
		
		  assetDetails.get().setItemName(asset.getItemName());
		  assetDetails.get().setItemNumber(asset.getItemNumber());
		  assetDetails.get().setSerialNumber(asset.getSerialNumber());
		  assetDetails.get().setStatus(asset.getStatus());
		 
		   assetRepository.save(assetDetails.get());
		   return assetDetails.get();
		}
		
	}

	@Override
	public List<Asset> viewAllAssets() {
		
	
		List<Asset> assetList =  assetRepository.findAll();
		if(assetList.isEmpty()) {
			throw new AssetNotFoundException();
		}
		else {
			return assetList;
		}
	}

	@Override
	public List<Asset> viewAssetsOfEmployee(int id) {
		List<Asset> assets = new ArrayList();
		List<Asset> assetList = assetRepository.findAll();
		
		for(Asset asset : assetList) {
			if(id == asset.getEmployee().getEmployeeId()) {
				assets.add(asset);
			}
		}
		
		return assets;
	}
	
	

}
